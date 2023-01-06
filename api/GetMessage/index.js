module.exports = async function (context, req) {
  const date = "2023-01-06T18:11:38.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

