module.exports = async function (context, req) {
  const date = "2022-03-08T00:39:53.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

