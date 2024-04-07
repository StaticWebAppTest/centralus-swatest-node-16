module.exports = async function (context, req) {
  const date = "2024-04-07T12:15:02.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

