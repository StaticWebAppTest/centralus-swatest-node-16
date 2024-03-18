module.exports = async function (context, req) {
  const date = "2024-03-18T14:09:27.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

