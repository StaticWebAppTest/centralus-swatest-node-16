module.exports = async function (context, req) {
  const date = "2023-04-22T11:06:56.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

