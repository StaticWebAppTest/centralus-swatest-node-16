module.exports = async function (context, req) {
  const date = "2024-05-01T14:10:43.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

