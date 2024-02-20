module.exports = async function (context, req) {
  const date = "2024-02-20T13:10:39.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

