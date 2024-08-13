module.exports = async function (context, req) {
  const date = "2024-08-13T07:10:56.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

