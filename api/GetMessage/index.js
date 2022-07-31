module.exports = async function (context, req) {
  const date = "2022-07-31T09:09:57.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

