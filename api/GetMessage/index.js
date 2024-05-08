module.exports = async function (context, req) {
  const date = "2024-05-08T18:13:01.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

