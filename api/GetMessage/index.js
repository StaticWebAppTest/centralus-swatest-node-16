module.exports = async function (context, req) {
  const date = "2023-02-05T23:09:35.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

