module.exports = async function (context, req) {
  const date = "2024-08-27T02:04:07.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

