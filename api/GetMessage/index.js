module.exports = async function (context, req) {
  const date = "2023-07-09T19:07:26.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

