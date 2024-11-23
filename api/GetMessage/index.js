module.exports = async function (context, req) {
  const date = "2024-11-23T22:10:33.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

