module.exports = async function (context, req) {
  const date = "2023-01-09T15:14:19.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

