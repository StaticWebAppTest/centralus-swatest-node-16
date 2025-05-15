module.exports = async function (context, req) {
  const date = "2025-05-15T07:13:18.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

