module.exports = async function (context, req) {
  const date = "2024-12-09T10:14:08.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

