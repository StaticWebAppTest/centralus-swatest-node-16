module.exports = async function (context, req) {
  const date = "2022-04-13T09:10:38.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

