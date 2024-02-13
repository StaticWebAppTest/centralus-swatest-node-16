module.exports = async function (context, req) {
  const date = "2024-02-13T17:07:55.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

