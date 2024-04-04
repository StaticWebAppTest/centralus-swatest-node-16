module.exports = async function (context, req) {
  const date = "2024-04-04T03:11:19.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

