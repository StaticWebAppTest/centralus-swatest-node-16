module.exports = async function (context, req) {
  const date = "2025-05-16T09:14:00.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

