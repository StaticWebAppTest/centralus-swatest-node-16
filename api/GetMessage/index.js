module.exports = async function (context, req) {
  const date = "2023-04-10T20:09:30.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

