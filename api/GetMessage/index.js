module.exports = async function (context, req) {
  const date = "2023-02-24T12:18:55.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

