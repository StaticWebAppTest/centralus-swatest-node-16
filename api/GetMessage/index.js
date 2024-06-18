module.exports = async function (context, req) {
  const date = "2024-06-18T06:14:07.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

