module.exports = async function (context, req) {
  const date = "2023-07-07T11:08:32.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

