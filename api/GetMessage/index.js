module.exports = async function (context, req) {
  const date = "2023-07-15T04:11:32.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

