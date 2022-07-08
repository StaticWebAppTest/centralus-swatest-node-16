module.exports = async function (context, req) {
  const date = "2022-07-08T01:03:51.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

