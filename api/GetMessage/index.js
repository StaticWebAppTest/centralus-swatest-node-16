module.exports = async function (context, req) {
  const date = "2024-09-10T20:12:35.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

