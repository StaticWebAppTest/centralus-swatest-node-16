module.exports = async function (context, req) {
  const date = "2024-02-03T06:10:46.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

