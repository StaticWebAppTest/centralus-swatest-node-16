module.exports = async function (context, req) {
  const date = "2024-04-23T11:08:36.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

