module.exports = async function (context, req) {
  const date = "2023-12-07T16:12:10.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

