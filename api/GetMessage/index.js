module.exports = async function (context, req) {
  const date = "2024-04-20T07:08:15.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

