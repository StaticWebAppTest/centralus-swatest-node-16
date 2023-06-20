module.exports = async function (context, req) {
  const date = "2023-06-20T23:08:23.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

