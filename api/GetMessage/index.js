module.exports = async function (context, req) {
  const date = "2023-07-03T04:11:49.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

