module.exports = async function (context, req) {
  const date = "2024-11-04T12:23:43.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

