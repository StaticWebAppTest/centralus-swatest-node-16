module.exports = async function (context, req) {
  const date = "2023-01-24T08:12:31.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

