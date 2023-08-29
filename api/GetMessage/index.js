module.exports = async function (context, req) {
  const date = "2023-08-29T19:06:50.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

