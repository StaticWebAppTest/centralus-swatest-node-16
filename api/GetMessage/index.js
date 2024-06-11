module.exports = async function (context, req) {
  const date = "2024-06-11T15:10:35.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

