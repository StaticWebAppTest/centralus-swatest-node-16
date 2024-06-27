module.exports = async function (context, req) {
  const date = "2024-06-27T15:11:25.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

