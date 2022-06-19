module.exports = async function (context, req) {
  const date = "2022-06-19T12:17:31.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

