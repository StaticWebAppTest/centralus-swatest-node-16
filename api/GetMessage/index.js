module.exports = async function (context, req) {
  const date = "2025-05-23T12:26:09.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

