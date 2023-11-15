module.exports = async function (context, req) {
  const date = "2023-11-15T17:08:37.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

