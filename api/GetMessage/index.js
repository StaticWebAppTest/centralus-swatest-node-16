module.exports = async function (context, req) {
  const date = "2024-07-09T22:10:53.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

