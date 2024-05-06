module.exports = async function (context, req) {
  const date = "2024-05-06T09:11:17.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

