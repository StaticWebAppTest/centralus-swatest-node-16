module.exports = async function (context, req) {
  const date = "2022-07-07T05:20:05.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

