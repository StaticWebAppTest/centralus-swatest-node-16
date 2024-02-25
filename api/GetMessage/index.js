module.exports = async function (context, req) {
  const date = "2024-02-25T18:10:03.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

