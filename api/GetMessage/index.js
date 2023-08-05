module.exports = async function (context, req) {
  const date = "2023-08-05T22:07:00.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

