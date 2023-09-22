module.exports = async function (context, req) {
  const date = "2023-09-22T20:09:04.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

