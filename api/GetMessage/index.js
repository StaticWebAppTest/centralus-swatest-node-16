module.exports = async function (context, req) {
  const date = "2023-06-09T09:08:34.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

