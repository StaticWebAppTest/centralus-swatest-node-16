module.exports = async function (context, req) {
  const date = "2022-09-13T16:15:55.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

