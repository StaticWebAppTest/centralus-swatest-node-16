module.exports = async function (context, req) {
  const date = "2023-02-09T23:11:03.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

