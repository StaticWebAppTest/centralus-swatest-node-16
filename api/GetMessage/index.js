module.exports = async function (context, req) {
  const date = "2023-04-04T04:10:44.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

