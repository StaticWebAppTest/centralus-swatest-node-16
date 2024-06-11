module.exports = async function (context, req) {
  const date = "2024-06-11T13:12:57.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

