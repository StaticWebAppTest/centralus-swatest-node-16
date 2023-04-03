module.exports = async function (context, req) {
  const date = "2023-04-03T12:17:07.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

