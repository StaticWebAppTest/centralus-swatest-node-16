module.exports = async function (context, req) {
  const date = "2022-11-19T16:13:29.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

