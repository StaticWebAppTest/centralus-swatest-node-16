module.exports = async function (context, req) {
  const date = "2022-03-10T00:43:20.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

