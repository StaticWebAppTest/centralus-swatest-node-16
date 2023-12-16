module.exports = async function (context, req) {
  const date = "2023-12-16T00:43:02.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

