module.exports = async function (context, req) {
  const date = "2023-12-20T17:07:53.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

