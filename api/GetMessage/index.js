module.exports = async function (context, req) {
  const date = "2023-10-16T02:18:51.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

