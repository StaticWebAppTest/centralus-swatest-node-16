module.exports = async function (context, req) {
  const date = "2023-11-10T10:09:22.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

