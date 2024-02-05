module.exports = async function (context, req) {
  const date = "2024-02-05T09:09:18.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

