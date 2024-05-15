module.exports = async function (context, req) {
  const date = "2024-05-15T23:10:30.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

