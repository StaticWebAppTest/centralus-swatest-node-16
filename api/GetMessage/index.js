module.exports = async function (context, req) {
  const date = "2024-03-22T06:11:54.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

