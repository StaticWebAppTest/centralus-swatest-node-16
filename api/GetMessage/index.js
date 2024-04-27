module.exports = async function (context, req) {
  const date = "2024-04-27T05:09:23.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

