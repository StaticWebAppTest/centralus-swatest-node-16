module.exports = async function (context, req) {
  const date = "2022-06-15T17:13:38.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

