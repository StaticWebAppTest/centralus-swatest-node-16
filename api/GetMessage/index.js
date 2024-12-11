module.exports = async function (context, req) {
  const date = "2024-12-11T07:12:50.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

