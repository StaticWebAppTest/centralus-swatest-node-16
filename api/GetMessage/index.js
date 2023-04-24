module.exports = async function (context, req) {
  const date = "2023-04-24T11:07:53.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

