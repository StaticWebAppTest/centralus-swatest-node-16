module.exports = async function (context, req) {
  const date = "2022-04-21T08:14:36.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

