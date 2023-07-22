module.exports = async function (context, req) {
  const date = "2023-07-22T03:09:03.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

