module.exports = async function (context, req) {
  const date = "2022-03-18T15:10:35.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

