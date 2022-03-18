module.exports = async function (context, req) {
  const date = "2022-03-18T12:16:46.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

