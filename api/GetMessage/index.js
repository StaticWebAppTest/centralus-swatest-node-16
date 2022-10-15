module.exports = async function (context, req) {
  const date = "2022-10-15T13:34:46.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

