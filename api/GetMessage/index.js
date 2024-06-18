module.exports = async function (context, req) {
  const date = "2024-06-18T13:12:52.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

