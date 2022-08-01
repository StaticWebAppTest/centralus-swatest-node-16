module.exports = async function (context, req) {
  const date = "2022-08-01T09:12:06.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

