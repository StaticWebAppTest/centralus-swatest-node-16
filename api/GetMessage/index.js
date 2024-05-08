module.exports = async function (context, req) {
  const date = "2024-05-08T06:11:32.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

