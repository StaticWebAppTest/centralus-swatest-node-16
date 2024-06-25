module.exports = async function (context, req) {
  const date = "2024-06-25T15:10:28.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

