module.exports = async function (context, req) {
  const date = "2024-05-24T18:13:04.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

