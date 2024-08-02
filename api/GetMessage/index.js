module.exports = async function (context, req) {
  const date = "2024-08-02T15:11:05.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

