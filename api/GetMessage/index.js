module.exports = async function (context, req) {
  const date = "2023-07-18T19:07:20.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

