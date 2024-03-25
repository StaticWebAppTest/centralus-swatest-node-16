module.exports = async function (context, req) {
  const date = "2024-03-25T02:18:40.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

