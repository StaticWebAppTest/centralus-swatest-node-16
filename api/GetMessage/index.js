module.exports = async function (context, req) {
  const date = "2023-08-30T15:08:58.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

