module.exports = async function (context, req) {
  const date = "2024-04-04T14:10:21.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

