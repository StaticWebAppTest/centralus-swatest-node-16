module.exports = async function (context, req) {
  const date = "2024-03-18T13:10:05.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

