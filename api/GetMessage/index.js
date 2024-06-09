module.exports = async function (context, req) {
  const date = "2024-06-09T08:11:57.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

