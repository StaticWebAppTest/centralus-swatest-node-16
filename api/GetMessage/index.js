module.exports = async function (context, req) {
  const date = "2025-01-10T21:10:45.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

