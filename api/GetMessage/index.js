module.exports = async function (context, req) {
  const date = "2023-03-11T00:46:58.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

