module.exports = async function (context, req) {
  const date = "2023-03-05T02:40:42.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

