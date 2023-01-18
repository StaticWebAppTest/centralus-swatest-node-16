module.exports = async function (context, req) {
  const date = "2023-01-18T02:16:10.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

