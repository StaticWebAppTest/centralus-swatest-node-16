module.exports = async function (context, req) {
  const date = "2022-02-25T13:14:07.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

