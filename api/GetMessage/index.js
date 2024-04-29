module.exports = async function (context, req) {
  const date = "2024-04-29T08:13:35.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

