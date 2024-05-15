module.exports = async function (context, req) {
  const date = "2024-05-15T13:11:21.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

