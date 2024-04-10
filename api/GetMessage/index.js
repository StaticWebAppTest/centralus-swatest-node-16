module.exports = async function (context, req) {
  const date = "2024-04-10T03:11:40.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

