module.exports = async function (context, req) {
  const date = "2022-12-17T07:07:40.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

