module.exports = async function (context, req) {
  const date = "2023-04-05T15:10:35.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

