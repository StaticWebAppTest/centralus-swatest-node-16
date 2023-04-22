module.exports = async function (context, req) {
  const date = "2023-04-22T13:10:04.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

