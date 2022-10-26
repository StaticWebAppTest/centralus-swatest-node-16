module.exports = async function (context, req) {
  const date = "2022-10-26T12:27:35.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

