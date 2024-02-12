module.exports = async function (context, req) {
  const date = "2024-02-12T09:10:19.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

