module.exports = async function (context, req) {
  const date = "2025-03-04T20:13:07.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

