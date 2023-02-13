module.exports = async function (context, req) {
  const date = "2023-02-13T10:11:16.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

