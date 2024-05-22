module.exports = async function (context, req) {
  const date = "2024-05-22T20:10:45.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

