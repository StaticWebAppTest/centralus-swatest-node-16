module.exports = async function (context, req) {
  const date = "2022-04-22T00:55:34.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

