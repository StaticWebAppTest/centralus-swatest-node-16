module.exports = async function (context, req) {
  const date = "2023-08-16T10:08:42.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

