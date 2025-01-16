module.exports = async function (context, req) {
  const date = "2025-01-16T09:12:05.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

