module.exports = async function (context, req) {
  const date = "2024-05-13T15:10:43.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

