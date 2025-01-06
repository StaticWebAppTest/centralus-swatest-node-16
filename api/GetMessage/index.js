module.exports = async function (context, req) {
  const date = "2025-01-06T15:12:06.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

