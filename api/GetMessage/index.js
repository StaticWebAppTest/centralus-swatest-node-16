module.exports = async function (context, req) {
  const date = "2023-08-15T22:07:42.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

