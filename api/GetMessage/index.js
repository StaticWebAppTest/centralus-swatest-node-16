module.exports = async function (context, req) {
  const date = "2022-12-31T16:11:32.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

