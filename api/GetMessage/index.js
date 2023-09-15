module.exports = async function (context, req) {
  const date = "2023-09-15T00:40:36.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

