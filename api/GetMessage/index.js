module.exports = async function (context, req) {
  const date = "2024-03-27T21:07:46.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

