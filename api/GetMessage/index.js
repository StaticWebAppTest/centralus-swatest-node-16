module.exports = async function (context, req) {
  const date = "2024-01-16T14:09:06.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

