module.exports = async function (context, req) {
  const date = "2024-06-01T08:12:18.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

