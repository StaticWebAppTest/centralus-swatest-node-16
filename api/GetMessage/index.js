module.exports = async function (context, req) {
  const date = "2022-05-01T10:11:56.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

