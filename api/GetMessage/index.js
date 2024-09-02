module.exports = async function (context, req) {
  const date = "2024-09-02T18:14:26.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

