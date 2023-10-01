module.exports = async function (context, req) {
  const date = "2023-10-01T00:47:09.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

