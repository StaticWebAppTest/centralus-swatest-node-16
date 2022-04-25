module.exports = async function (context, req) {
  const date = "2022-04-25T10:12:07.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

