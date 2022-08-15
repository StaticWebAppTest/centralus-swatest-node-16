module.exports = async function (context, req) {
  const date = "2022-08-15T12:22:08.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

