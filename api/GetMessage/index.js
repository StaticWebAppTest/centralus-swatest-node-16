module.exports = async function (context, req) {
  const date = "2023-07-21T20:09:15.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

