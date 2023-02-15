module.exports = async function (context, req) {
  const date = "2023-02-15T03:15:21.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

