module.exports = async function (context, req) {
  const date = "2023-04-11T06:11:41.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

