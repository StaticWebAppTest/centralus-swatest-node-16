module.exports = async function (context, req) {
  const date = "2024-06-01T03:12:55.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

