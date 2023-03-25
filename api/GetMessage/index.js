module.exports = async function (context, req) {
  const date = "2023-03-25T20:08:57.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

