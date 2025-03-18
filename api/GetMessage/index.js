module.exports = async function (context, req) {
  const date = "2025-03-18T11:10:32.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

