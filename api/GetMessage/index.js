module.exports = async function (context, req) {
  const date = "2023-04-23T21:07:17.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

