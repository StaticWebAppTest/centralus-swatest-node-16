module.exports = async function (context, req) {
  const date = "2024-05-13T22:10:00.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

