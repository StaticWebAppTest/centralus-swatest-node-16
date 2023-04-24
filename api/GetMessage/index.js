module.exports = async function (context, req) {
  const date = "2023-04-24T15:09:41.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

