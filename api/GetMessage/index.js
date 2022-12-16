module.exports = async function (context, req) {
  const date = "2022-12-16T21:08:29.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

