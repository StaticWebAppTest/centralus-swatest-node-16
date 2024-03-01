module.exports = async function (context, req) {
  const date = "2024-03-01T15:09:40.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

