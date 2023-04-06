module.exports = async function (context, req) {
  const date = "2023-04-06T07:08:05.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

