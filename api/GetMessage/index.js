module.exports = async function (context, req) {
  const date = "2025-01-30T09:12:00.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

