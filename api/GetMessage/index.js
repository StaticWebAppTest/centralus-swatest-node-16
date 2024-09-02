module.exports = async function (context, req) {
  const date = "2024-09-02T20:11:45.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

