module.exports = async function (context, req) {
  const date = "2023-07-12T11:08:13.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

