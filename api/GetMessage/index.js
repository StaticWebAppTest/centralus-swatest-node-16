module.exports = async function (context, req) {
  const date = "2023-03-21T03:09:55.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

