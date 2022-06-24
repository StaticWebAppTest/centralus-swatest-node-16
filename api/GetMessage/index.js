module.exports = async function (context, req) {
  const date = "2022-06-24T00:56:18.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

