module.exports = async function (context, req) {
  const date = "2023-01-20T11:08:12.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

