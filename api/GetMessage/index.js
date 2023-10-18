module.exports = async function (context, req) {
  const date = "2023-10-18T07:08:24.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

