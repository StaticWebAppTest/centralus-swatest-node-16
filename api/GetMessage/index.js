module.exports = async function (context, req) {
  const date = "2024-04-30T08:12:54.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

