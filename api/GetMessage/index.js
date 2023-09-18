module.exports = async function (context, req) {
  const date = "2023-09-18T22:07:57.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

