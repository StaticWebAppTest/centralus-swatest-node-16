module.exports = async function (context, req) {
  const date = "2023-11-17T04:11:21.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

