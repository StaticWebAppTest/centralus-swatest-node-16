module.exports = async function (context, req) {
  const date = "2024-10-10T10:12:22.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

