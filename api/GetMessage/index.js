module.exports = async function (context, req) {
  const date = "2023-07-20T04:10:52.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

