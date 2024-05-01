module.exports = async function (context, req) {
  const date = "2024-05-01T06:13:42.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

