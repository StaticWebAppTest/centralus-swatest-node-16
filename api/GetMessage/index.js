module.exports = async function (context, req) {
  const date = "2023-04-15T15:08:07.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

