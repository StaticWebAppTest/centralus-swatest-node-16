module.exports = async function (context, req) {
  const date = "2023-09-29T13:10:57.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

