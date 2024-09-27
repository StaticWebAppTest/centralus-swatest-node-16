module.exports = async function (context, req) {
  const date = "2024-09-27T10:12:42.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

