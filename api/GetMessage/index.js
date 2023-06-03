module.exports = async function (context, req) {
  const date = "2023-06-03T22:07:23.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

