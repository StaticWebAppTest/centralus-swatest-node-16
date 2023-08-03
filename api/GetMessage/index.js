module.exports = async function (context, req) {
  const date = "2023-08-03T21:07:17.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

