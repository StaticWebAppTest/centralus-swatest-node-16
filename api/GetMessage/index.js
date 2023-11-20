module.exports = async function (context, req) {
  const date = "2023-11-20T17:07:05.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

