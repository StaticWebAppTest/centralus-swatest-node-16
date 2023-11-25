module.exports = async function (context, req) {
  const date = "2023-11-25T00:41:14.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

