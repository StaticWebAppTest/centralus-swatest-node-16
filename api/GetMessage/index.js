module.exports = async function (context, req) {
  const date = "2024-01-20T08:11:14.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

