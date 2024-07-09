module.exports = async function (context, req) {
  const date = "2024-07-09T03:12:40.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

