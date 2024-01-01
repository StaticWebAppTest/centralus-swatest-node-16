module.exports = async function (context, req) {
  const date = "2024-01-01T06:13:24.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

