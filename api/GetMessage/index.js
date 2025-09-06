module.exports = async function (context, req) {
  const date = "2025-09-06T09:11:24.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

