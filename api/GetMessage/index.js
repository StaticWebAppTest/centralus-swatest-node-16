module.exports = async function (context, req) {
  const date = "2024-08-19T09:11:54.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

