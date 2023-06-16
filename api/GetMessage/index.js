module.exports = async function (context, req) {
  const date = "2023-06-16T10:09:28.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

