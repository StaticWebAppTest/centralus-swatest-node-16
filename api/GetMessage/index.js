module.exports = async function (context, req) {
  const date = "2023-01-26T10:10:18.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

