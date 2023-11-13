module.exports = async function (context, req) {
  const date = "2023-11-13T14:08:50.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

