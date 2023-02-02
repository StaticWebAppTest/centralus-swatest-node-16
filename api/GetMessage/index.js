module.exports = async function (context, req) {
  const date = "2023-02-02T22:09:14.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

