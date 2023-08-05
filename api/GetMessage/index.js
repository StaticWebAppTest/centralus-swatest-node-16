module.exports = async function (context, req) {
  const date = "2023-08-05T00:46:11.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

