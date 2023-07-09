module.exports = async function (context, req) {
  const date = "2023-07-09T15:09:12.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

