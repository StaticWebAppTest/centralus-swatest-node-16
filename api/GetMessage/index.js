module.exports = async function (context, req) {
  const date = "2024-03-27T03:09:47.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

