module.exports = async function (context, req) {
  const date = "2023-10-26T16:10:53.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

