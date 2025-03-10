module.exports = async function (context, req) {
  const date = "2025-03-10T19:10:37.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

