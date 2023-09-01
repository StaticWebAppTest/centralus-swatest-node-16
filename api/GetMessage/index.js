module.exports = async function (context, req) {
  const date = "2023-09-01T16:10:57.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

