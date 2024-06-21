module.exports = async function (context, req) {
  const date = "2024-06-21T06:14:34.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

