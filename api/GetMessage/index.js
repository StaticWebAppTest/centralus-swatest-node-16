module.exports = async function (context, req) {
  const date = "2023-05-19T16:11:02.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

