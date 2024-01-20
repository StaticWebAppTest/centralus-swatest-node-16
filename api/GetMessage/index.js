module.exports = async function (context, req) {
  const date = "2024-01-20T14:07:54.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

