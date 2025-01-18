module.exports = async function (context, req) {
  const date = "2025-01-18T09:10:38.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

