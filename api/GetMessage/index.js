module.exports = async function (context, req) {
  const date = "2022-07-24T10:11:25.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

