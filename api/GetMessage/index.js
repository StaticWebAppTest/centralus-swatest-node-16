module.exports = async function (context, req) {
  const date = "2024-06-21T18:13:50.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

