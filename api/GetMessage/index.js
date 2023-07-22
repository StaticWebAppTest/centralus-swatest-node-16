module.exports = async function (context, req) {
  const date = "2023-07-22T09:08:02.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

