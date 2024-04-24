module.exports = async function (context, req) {
  const date = "2024-04-24T23:11:24.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

