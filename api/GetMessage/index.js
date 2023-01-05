module.exports = async function (context, req) {
  const date = "2023-01-05T06:11:17.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

