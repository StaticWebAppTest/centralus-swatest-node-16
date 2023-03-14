module.exports = async function (context, req) {
  const date = "2023-03-14T04:12:12.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

