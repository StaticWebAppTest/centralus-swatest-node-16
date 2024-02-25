module.exports = async function (context, req) {
  const date = "2024-02-25T01:44:34.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

