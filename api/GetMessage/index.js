module.exports = async function (context, req) {
  const date = "2023-05-12T00:47:19.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

