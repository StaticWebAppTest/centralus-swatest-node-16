module.exports = async function (context, req) {
  const date = "2024-09-12T16:13:21.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

