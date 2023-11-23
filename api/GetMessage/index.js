module.exports = async function (context, req) {
  const date = "2023-11-23T03:09:38.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

