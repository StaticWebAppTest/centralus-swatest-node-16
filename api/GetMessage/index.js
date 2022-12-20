module.exports = async function (context, req) {
  const date = "2022-12-20T12:17:40.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

