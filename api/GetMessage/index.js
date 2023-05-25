module.exports = async function (context, req) {
  const date = "2023-05-25T00:48:03.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

