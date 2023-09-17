module.exports = async function (context, req) {
  const date = "2023-09-17T00:42:49.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

