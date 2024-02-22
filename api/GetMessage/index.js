module.exports = async function (context, req) {
  const date = "2024-02-22T13:10:40.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

