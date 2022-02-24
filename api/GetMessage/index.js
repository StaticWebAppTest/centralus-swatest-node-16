module.exports = async function (context, req) {
  const date = "2022-02-24T17:10:47.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

