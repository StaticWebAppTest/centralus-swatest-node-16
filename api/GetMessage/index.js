module.exports = async function (context, req) {
  const date = "2024-06-27T09:10:47.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

