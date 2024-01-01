module.exports = async function (context, req) {
  const date = "2024-01-01T08:12:27.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

