module.exports = async function (context, req) {
  const date = "2024-02-19T18:12:02.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

