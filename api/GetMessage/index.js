module.exports = async function (context, req) {
  const date = "2022-04-25T13:27:03.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

