module.exports = async function (context, req) {
  const date = "2023-06-24T18:11:43.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

