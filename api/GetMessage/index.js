module.exports = async function (context, req) {
  const date = "2024-04-23T04:11:01.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

