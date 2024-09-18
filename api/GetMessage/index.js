module.exports = async function (context, req) {
  const date = "2024-09-18T10:12:08.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

