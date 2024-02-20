module.exports = async function (context, req) {
  const date = "2024-02-20T21:07:40.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

