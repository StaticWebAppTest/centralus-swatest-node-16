module.exports = async function (context, req) {
  const date = "2024-07-08T07:11:20.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

