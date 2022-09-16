module.exports = async function (context, req) {
  const date = "2022-09-16T17:29:15.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

