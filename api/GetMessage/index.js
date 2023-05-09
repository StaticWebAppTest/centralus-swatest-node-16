module.exports = async function (context, req) {
  const date = "2023-05-09T13:34:09.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

