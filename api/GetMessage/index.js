module.exports = async function (context, req) {
  const date = "2024-01-15T12:17:52.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

