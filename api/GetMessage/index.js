module.exports = async function (context, req) {
  const date = "2023-08-05T06:10:12.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

