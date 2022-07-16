module.exports = async function (context, req) {
  const date = "2022-07-16T19:08:43.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

