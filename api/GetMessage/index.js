module.exports = async function (context, req) {
  const date = "2024-01-20T23:09:50.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

