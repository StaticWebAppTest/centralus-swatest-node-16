module.exports = async function (context, req) {
  const date = "2023-06-10T20:09:55.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

