module.exports = async function (context, req) {
  const date = "2023-12-23T04:10:58.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

