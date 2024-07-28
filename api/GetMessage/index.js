module.exports = async function (context, req) {
  const date = "2024-07-28T06:13:34.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

