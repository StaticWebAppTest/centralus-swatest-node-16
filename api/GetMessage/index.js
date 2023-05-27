module.exports = async function (context, req) {
  const date = "2023-05-27T04:09:55.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

