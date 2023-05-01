module.exports = async function (context, req) {
  const date = "2023-05-01T07:08:57.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

