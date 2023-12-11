module.exports = async function (context, req) {
  const date = "2023-12-11T15:10:20.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

