module.exports = async function (context, req) {
  const date = "2024-03-27T14:09:25.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

