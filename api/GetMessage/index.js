module.exports = async function (context, req) {
  const date = "2023-08-15T00:38:54.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

