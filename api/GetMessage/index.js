module.exports = async function (context, req) {
  const date = "2023-07-22T04:10:01.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

