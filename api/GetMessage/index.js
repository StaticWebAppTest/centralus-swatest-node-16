module.exports = async function (context, req) {
  const date = "2024-06-20T08:14:08.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

