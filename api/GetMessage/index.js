module.exports = async function (context, req) {
  const date = "2024-05-02T15:10:31.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

