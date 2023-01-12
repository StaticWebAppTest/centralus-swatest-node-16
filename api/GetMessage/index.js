module.exports = async function (context, req) {
  const date = "2023-01-12T22:09:47.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

