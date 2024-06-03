module.exports = async function (context, req) {
  const date = "2024-06-03T13:12:16.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

