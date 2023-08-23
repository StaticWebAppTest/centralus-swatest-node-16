module.exports = async function (context, req) {
  const date = "2023-08-23T12:16:00.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

