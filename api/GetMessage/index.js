module.exports = async function (context, req) {
  const date = "2022-11-19T00:59:52.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

