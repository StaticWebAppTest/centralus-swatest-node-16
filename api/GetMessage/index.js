module.exports = async function (context, req) {
  const date = "2023-09-22T18:11:17.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

