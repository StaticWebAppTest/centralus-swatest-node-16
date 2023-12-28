module.exports = async function (context, req) {
  const date = "2023-12-28T16:11:14.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

