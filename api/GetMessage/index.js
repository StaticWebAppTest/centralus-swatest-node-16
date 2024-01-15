module.exports = async function (context, req) {
  const date = "2024-01-15T03:10:21.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

