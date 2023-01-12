module.exports = async function (context, req) {
  const date = "2023-01-12T10:11:59.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

