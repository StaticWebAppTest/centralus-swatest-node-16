module.exports = async function (context, req) {
  const date = "2023-01-23T00:49:53.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

