module.exports = async function (context, req) {
  const date = "2023-04-15T13:10:02.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

