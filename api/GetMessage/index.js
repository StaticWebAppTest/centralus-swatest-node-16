module.exports = async function (context, req) {
  const date = "2023-06-13T21:07:43.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

