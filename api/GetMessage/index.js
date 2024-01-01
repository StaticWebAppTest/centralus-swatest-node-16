module.exports = async function (context, req) {
  const date = "2024-01-01T10:10:18.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

