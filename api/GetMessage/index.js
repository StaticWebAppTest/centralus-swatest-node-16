module.exports = async function (context, req) {
  const date = "2024-06-13T19:08:08.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

