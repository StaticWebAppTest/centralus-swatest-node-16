module.exports = async function (context, req) {
  const date = "2024-06-15T00:46:55.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

