module.exports = async function (context, req) {
  const date = "2023-08-29T20:09:19.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

