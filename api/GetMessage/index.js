module.exports = async function (context, req) {
  const date = "2023-04-22T20:09:04.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

