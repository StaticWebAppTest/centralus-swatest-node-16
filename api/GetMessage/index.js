module.exports = async function (context, req) {
  const date = "2024-12-04T17:11:15.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

