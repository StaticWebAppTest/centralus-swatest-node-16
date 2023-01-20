module.exports = async function (context, req) {
  const date = "2023-01-20T14:08:57.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

