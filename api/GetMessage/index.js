module.exports = async function (context, req) {
  const date = "2024-12-18T17:11:04.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

