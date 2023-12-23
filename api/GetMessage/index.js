module.exports = async function (context, req) {
  const date = "2023-12-23T00:41:08.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

