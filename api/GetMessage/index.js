module.exports = async function (context, req) {
  const date = "2025-03-18T19:10:04.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

