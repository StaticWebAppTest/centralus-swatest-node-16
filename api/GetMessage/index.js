module.exports = async function (context, req) {
  const date = "2024-02-08T04:11:22.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

