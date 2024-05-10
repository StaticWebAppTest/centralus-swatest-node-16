module.exports = async function (context, req) {
  const date = "2024-05-10T01:54:09.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

