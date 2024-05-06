module.exports = async function (context, req) {
  const date = "2024-05-06T04:12:18.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

