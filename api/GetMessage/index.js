module.exports = async function (context, req) {
  const date = "2023-12-22T04:11:17.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

