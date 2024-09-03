module.exports = async function (context, req) {
  const date = "2024-09-03T07:10:56.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

