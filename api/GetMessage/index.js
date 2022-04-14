module.exports = async function (context, req) {
  const date = "2022-04-14T03:34:16.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

