module.exports = async function (context, req) {
  const date = "2023-02-15T22:09:47.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

