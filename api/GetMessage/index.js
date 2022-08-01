module.exports = async function (context, req) {
  const date = "2022-08-01T15:14:02.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

