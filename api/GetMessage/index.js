module.exports = async function (context, req) {
  const date = "2025-04-13T21:11:11.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

