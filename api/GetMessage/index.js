module.exports = async function (context, req) {
  const date = "2024-11-25T06:18:15.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

