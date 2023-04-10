module.exports = async function (context, req) {
  const date = "2023-04-10T03:09:34.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

