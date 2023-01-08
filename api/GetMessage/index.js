module.exports = async function (context, req) {
  const date = "2023-01-08T10:09:39.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

