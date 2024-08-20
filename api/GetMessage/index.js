module.exports = async function (context, req) {
  const date = "2024-08-20T09:12:54.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

