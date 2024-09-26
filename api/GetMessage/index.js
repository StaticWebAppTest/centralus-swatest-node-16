module.exports = async function (context, req) {
  const date = "2024-09-26T15:12:08.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

