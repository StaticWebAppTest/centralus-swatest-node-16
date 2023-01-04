module.exports = async function (context, req) {
  const date = "2023-01-04T02:11:48.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

