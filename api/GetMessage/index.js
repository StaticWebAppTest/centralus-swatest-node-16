module.exports = async function (context, req) {
  const date = "2023-10-14T22:07:27.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

