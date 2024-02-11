module.exports = async function (context, req) {
  const date = "2024-02-11T02:17:49.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

