module.exports = async function (context, req) {
  const date = "2022-07-24T05:14:37.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

