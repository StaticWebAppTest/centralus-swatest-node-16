module.exports = async function (context, req) {
  const date = "2023-11-13T10:10:06.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

