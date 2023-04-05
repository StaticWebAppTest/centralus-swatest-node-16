module.exports = async function (context, req) {
  const date = "2023-04-05T06:12:03.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

