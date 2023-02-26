module.exports = async function (context, req) {
  const date = "2023-02-26T22:08:57.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

