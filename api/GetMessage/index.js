module.exports = async function (context, req) {
  const date = "2023-06-20T09:08:57.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

