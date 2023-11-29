module.exports = async function (context, req) {
  const date = "2023-11-29T13:12:19.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

