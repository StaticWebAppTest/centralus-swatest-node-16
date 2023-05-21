module.exports = async function (context, req) {
  const date = "2023-05-21T10:08:16.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

