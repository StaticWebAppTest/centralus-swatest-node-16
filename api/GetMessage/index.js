module.exports = async function (context, req) {
  const date = "2022-11-05T20:14:19.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

