module.exports = async function (context, req) {
  const date = "2022-02-27T04:12:16.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

