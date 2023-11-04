module.exports = async function (context, req) {
  const date = "2023-11-04T12:14:35.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

