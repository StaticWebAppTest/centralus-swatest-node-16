module.exports = async function (context, req) {
  const date = "2023-06-23T11:08:39.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

