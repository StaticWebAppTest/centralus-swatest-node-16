module.exports = async function (context, req) {
  const date = "2023-08-17T19:06:49.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

