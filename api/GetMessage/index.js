module.exports = async function (context, req) {
  const date = "2024-07-25T12:19:18.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

