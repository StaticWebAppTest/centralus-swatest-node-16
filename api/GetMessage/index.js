module.exports = async function (context, req) {
  const date = "2024-01-15T00:46:27.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

