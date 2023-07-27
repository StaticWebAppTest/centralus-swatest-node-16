module.exports = async function (context, req) {
  const date = "2023-07-27T09:09:00.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

