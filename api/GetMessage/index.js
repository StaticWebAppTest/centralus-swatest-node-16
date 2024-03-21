module.exports = async function (context, req) {
  const date = "2024-03-21T11:08:20.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

