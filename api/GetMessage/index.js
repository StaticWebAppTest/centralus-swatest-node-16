module.exports = async function (context, req) {
  const date = "2023-08-06T23:07:43.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

