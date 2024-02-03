module.exports = async function (context, req) {
  const date = "2024-02-03T13:08:38.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

