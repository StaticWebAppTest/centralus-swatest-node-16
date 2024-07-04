module.exports = async function (context, req) {
  const date = "2024-07-04T22:10:30.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

