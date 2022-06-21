module.exports = async function (context, req) {
  const date = "2022-06-21T13:37:03.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

