module.exports = async function (context, req) {
  const date = "2024-04-07T06:11:00.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

