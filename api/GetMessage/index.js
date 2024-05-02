module.exports = async function (context, req) {
  const date = "2024-05-02T20:10:40.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

