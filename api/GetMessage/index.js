module.exports = async function (context, req) {
  const date = "2024-07-06T10:10:01.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

