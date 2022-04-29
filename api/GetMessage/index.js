module.exports = async function (context, req) {
  const date = "2022-04-29T12:24:03.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

