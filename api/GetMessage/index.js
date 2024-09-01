module.exports = async function (context, req) {
  const date = "2024-09-01T08:13:23.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

