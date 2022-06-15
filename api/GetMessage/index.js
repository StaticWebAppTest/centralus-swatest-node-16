module.exports = async function (context, req) {
  const date = "2022-06-15T00:58:04.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

