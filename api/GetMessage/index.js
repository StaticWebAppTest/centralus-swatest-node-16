module.exports = async function (context, req) {
  const date = "2025-05-10T15:12:28.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

