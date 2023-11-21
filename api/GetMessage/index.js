module.exports = async function (context, req) {
  const date = "2023-11-21T04:11:36.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

