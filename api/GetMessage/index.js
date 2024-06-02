module.exports = async function (context, req) {
  const date = "2024-06-02T09:10:48.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

