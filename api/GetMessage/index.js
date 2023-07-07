module.exports = async function (context, req) {
  const date = "2023-07-07T02:52:36.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

