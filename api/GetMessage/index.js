module.exports = async function (context, req) {
  const date = "2024-03-10T01:46:07.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

