module.exports = async function (context, req) {
  const date = "2023-12-05T10:10:25.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

