module.exports = async function (context, req) {
  const date = "2024-04-23T10:09:46.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

