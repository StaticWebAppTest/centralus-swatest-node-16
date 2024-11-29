module.exports = async function (context, req) {
  const date = "2024-11-29T11:10:13.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

