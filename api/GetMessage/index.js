module.exports = async function (context, req) {
  const date = "2023-02-12T19:07:29.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

