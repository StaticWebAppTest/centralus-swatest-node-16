module.exports = async function (context, req) {
  const date = "2024-06-07T16:12:09.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

