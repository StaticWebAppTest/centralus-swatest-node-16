module.exports = async function (context, req) {
  const date = "2023-10-15T10:08:38.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

