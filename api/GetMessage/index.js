module.exports = async function (context, req) {
  const date = "2022-06-21T12:24:29.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

