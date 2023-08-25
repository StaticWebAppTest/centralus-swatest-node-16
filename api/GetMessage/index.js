module.exports = async function (context, req) {
  const date = "2023-08-25T17:07:33.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

