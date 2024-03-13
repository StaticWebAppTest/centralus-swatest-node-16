module.exports = async function (context, req) {
  const date = "2024-03-13T15:09:55.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

