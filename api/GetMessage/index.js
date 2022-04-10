module.exports = async function (context, req) {
  const date = "2022-04-10T17:11:36.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

