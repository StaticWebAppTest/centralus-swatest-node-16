module.exports = async function (context, req) {
  const date = "2023-01-03T23:09:36.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

