module.exports = async function (context, req) {
  const date = "2023-11-20T23:09:19.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

