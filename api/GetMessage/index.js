module.exports = async function (context, req) {
  const date = "2023-06-13T17:07:53.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

