module.exports = async function (context, req) {
  const date = "2022-07-08T04:32:49.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

