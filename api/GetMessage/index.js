module.exports = async function (context, req) {
  const date = "2023-12-03T21:07:22.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

