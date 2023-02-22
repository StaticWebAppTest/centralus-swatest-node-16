module.exports = async function (context, req) {
  const date = "2023-02-22T11:08:39.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

