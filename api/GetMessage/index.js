module.exports = async function (context, req) {
  const date = "2023-04-08T04:10:21.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

