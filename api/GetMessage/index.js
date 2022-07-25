module.exports = async function (context, req) {
  const date = "2022-07-25T10:12:56.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

