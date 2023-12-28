module.exports = async function (context, req) {
  const date = "2023-12-28T04:11:37.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

