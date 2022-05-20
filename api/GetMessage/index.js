module.exports = async function (context, req) {
  const date = "2022-05-20T13:36:18.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

