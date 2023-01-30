module.exports = async function (context, req) {
  const date = "2023-01-30T00:47:44.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

