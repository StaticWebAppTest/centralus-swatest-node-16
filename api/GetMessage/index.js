module.exports = async function (context, req) {
  const date = "2024-08-21T18:14:01.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

