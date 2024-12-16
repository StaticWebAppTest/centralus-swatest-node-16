module.exports = async function (context, req) {
  const date = "2024-12-16T04:15:47.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

