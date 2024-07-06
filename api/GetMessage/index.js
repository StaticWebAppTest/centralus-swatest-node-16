module.exports = async function (context, req) {
  const date = "2024-07-06T22:10:07.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

