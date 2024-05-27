module.exports = async function (context, req) {
  const date = "2024-05-27T16:12:03.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

