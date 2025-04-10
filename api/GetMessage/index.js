module.exports = async function (context, req) {
  const date = "2025-04-10T11:10:53.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

