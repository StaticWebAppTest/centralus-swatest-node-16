module.exports = async function (context, req) {
  const date = "2024-03-20T06:11:56.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

