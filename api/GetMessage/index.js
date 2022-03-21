module.exports = async function (context, req) {
  const date = "2022-03-21T00:41:54.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

