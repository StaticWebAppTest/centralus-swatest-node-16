module.exports = async function (context, req) {
  const date = "2024-05-02T09:10:11.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

