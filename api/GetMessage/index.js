module.exports = async function (context, req) {
  const date = "2023-02-17T00:56:08.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

