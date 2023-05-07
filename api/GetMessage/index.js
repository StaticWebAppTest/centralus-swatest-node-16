module.exports = async function (context, req) {
  const date = "2023-05-07T12:15:13.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

