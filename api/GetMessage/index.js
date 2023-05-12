module.exports = async function (context, req) {
  const date = "2023-05-12T13:10:43.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

