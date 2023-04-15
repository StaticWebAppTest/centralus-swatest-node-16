module.exports = async function (context, req) {
  const date = "2023-04-15T10:08:33.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

