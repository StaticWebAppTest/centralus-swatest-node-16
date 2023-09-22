module.exports = async function (context, req) {
  const date = "2023-09-22T00:40:37.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

