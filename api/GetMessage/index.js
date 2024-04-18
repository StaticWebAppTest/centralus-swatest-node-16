module.exports = async function (context, req) {
  const date = "2024-04-18T07:10:05.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

