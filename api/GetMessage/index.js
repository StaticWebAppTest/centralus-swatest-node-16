module.exports = async function (context, req) {
  const date = "2023-09-13T14:08:11.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

