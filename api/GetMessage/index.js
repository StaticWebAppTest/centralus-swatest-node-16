module.exports = async function (context, req) {
  const date = "2022-10-22T03:53:00.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

