module.exports = async function (context, req) {
  const date = "2022-04-29T03:52:05.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

