module.exports = async function (context, req) {
  const date = "2023-06-20T19:07:04.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

