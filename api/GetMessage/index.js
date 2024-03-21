module.exports = async function (context, req) {
  const date = "2024-03-21T22:09:08.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

