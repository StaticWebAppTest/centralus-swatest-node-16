module.exports = async function (context, req) {
  const date = "2024-08-25T09:10:06.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

