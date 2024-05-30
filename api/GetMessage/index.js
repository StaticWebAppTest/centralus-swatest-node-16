module.exports = async function (context, req) {
  const date = "2024-05-30T19:09:36.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

