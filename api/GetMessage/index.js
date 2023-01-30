module.exports = async function (context, req) {
  const date = "2023-01-30T19:07:51.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

