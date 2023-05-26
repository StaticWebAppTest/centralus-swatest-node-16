module.exports = async function (context, req) {
  const date = "2023-05-26T00:48:03.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

