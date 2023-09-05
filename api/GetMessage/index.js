module.exports = async function (context, req) {
  const date = "2023-09-05T21:07:34.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

