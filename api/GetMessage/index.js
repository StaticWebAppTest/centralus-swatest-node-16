module.exports = async function (context, req) {
  const date = "2022-06-25T19:08:23.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

