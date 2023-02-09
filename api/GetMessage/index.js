module.exports = async function (context, req) {
  const date = "2023-02-09T04:11:40.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

