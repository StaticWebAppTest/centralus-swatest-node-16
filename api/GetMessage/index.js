module.exports = async function (context, req) {
  const date = "2024-04-12T22:07:37.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

