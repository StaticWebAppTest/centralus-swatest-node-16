module.exports = async function (context, req) {
  const date = "2023-01-30T16:13:01.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

