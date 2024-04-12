module.exports = async function (context, req) {
  const date = "2024-04-12T10:10:27.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

