module.exports = async function (context, req) {
  const date = "2023-01-10T19:08:15.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

