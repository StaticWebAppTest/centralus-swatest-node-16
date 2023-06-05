module.exports = async function (context, req) {
  const date = "2023-06-05T19:07:13.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

