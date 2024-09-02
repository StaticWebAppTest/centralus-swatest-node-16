module.exports = async function (context, req) {
  const date = "2024-09-02T23:11:31.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

