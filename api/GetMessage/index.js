module.exports = async function (context, req) {
  const date = "2023-09-28T13:11:51.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

