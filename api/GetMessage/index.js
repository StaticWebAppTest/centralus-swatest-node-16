module.exports = async function (context, req) {
  const date = "2024-07-20T17:08:59.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

