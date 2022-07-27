module.exports = async function (context, req) {
  const date = "2022-07-27T03:45:05.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

