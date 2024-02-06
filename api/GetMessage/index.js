module.exports = async function (context, req) {
  const date = "2024-02-06T10:09:53.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

