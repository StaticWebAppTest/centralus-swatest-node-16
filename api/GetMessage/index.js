module.exports = async function (context, req) {
  const date = "2024-06-25T10:10:56.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

