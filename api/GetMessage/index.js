module.exports = async function (context, req) {
  const date = "2024-08-26T23:11:12.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

