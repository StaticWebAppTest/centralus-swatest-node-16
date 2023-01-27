module.exports = async function (context, req) {
  const date = "2023-01-27T00:53:03.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

