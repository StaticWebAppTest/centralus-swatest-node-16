module.exports = async function (context, req) {
  const date = "2023-04-30T16:10:09.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

