module.exports = async function (context, req) {
  const date = "2024-12-13T10:13:44.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

