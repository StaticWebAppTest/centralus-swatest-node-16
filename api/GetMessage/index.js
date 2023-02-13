module.exports = async function (context, req) {
  const date = "2023-02-13T18:12:45.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

