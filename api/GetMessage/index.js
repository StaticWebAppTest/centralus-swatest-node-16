module.exports = async function (context, req) {
  const date = "2023-09-16T15:07:35.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

