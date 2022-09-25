module.exports = async function (context, req) {
  const date = "2022-09-25T21:10:58.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

