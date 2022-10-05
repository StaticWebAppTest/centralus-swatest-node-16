module.exports = async function (context, req) {
  const date = "2022-10-05T11:12:19.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

