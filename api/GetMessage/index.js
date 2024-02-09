module.exports = async function (context, req) {
  const date = "2024-02-09T09:09:54.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

