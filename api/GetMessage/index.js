module.exports = async function (context, req) {
  const date = "2024-04-30T23:09:18.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

