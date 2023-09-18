module.exports = async function (context, req) {
  const date = "2023-09-18T19:06:57.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

