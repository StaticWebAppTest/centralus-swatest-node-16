module.exports = async function (context, req) {
  const date = "2023-12-03T00:46:46.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

