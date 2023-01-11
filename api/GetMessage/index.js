module.exports = async function (context, req) {
  const date = "2023-01-11T02:14:11.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

