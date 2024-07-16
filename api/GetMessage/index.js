module.exports = async function (context, req) {
  const date = "2024-07-16T22:09:57.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

