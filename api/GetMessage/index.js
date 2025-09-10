module.exports = async function (context, req) {
  const date = "2025-09-10T07:12:34.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

