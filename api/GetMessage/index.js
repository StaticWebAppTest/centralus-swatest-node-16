module.exports = async function (context, req) {
  const date = "2023-06-25T12:18:10.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

