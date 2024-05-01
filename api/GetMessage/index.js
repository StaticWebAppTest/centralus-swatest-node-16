module.exports = async function (context, req) {
  const date = "2024-05-01T02:24:57.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

