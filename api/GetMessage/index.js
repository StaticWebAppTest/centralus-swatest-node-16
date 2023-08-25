module.exports = async function (context, req) {
  const date = "2023-08-25T19:06:47.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

