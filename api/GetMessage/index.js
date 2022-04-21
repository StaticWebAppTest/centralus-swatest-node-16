module.exports = async function (context, req) {
  const date = "2022-04-21T14:11:01.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

