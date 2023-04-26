module.exports = async function (context, req) {
  const date = "2023-04-26T17:08:16.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

