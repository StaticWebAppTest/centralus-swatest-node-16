module.exports = async function (context, req) {
  const date = "2024-03-20T22:07:55.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

