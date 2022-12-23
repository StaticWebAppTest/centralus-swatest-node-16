module.exports = async function (context, req) {
  const date = "2022-12-23T03:10:34.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

