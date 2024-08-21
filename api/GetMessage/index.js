module.exports = async function (context, req) {
  const date = "2024-08-21T11:08:56.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

