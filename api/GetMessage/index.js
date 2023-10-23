module.exports = async function (context, req) {
  const date = "2023-10-23T00:41:16.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

