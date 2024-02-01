module.exports = async function (context, req) {
  const date = "2024-02-01T10:10:01.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

