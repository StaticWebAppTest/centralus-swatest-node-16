module.exports = async function (context, req) {
  const date = "2024-09-24T22:11:02.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

