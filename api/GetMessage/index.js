module.exports = async function (context, req) {
  const date = "2025-12-13T06:20:40.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

