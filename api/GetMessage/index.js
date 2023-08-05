module.exports = async function (context, req) {
  const date = "2023-08-05T17:06:55.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

