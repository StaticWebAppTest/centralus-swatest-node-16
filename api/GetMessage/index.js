module.exports = async function (context, req) {
  const date = "2024-06-10T01:58:40.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

