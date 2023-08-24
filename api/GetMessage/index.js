module.exports = async function (context, req) {
  const date = "2023-08-24T23:08:14.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

