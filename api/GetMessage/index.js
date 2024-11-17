module.exports = async function (context, req) {
  const date = "2024-11-17T22:10:36.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

