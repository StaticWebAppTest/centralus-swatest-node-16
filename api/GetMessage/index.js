module.exports = async function (context, req) {
  const date = "2022-10-31T15:12:42.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

