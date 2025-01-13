module.exports = async function (context, req) {
  const date = "2025-01-13T16:15:22.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

