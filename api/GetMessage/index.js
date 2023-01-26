module.exports = async function (context, req) {
  const date = "2023-01-26T16:11:52.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

