module.exports = async function (context, req) {
  const date = "2022-07-07T16:18:44.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

