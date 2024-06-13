module.exports = async function (context, req) {
  const date = "2024-06-13T00:46:50.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

