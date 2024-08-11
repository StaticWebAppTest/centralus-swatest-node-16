module.exports = async function (context, req) {
  const date = "2024-08-11T13:11:47.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

