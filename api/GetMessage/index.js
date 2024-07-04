module.exports = async function (context, req) {
  const date = "2024-07-04T15:10:14.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

