module.exports = async function (context, req) {
  const date = "2024-12-12T21:11:47.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

