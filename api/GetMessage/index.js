module.exports = async function (context, req) {
  const date = "2023-07-25T00:56:36.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

