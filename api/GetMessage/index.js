module.exports = async function (context, req) {
  const date = "2024-06-25T01:56:40.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

