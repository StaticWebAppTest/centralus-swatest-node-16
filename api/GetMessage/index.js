module.exports = async function (context, req) {
  const date = "2023-01-01T03:15:15.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

