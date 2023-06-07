module.exports = async function (context, req) {
  const date = "2023-06-07T22:07:58.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

