module.exports = async function (context, req) {
  const date = "2023-11-19T00:47:07.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

