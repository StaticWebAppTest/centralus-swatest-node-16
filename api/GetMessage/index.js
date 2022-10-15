module.exports = async function (context, req) {
  const date = "2022-10-15T17:21:40.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

