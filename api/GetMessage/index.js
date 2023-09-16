module.exports = async function (context, req) {
  const date = "2023-09-16T11:06:26.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

