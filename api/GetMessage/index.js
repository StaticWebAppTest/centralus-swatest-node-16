module.exports = async function (context, req) {
  const date = "2023-09-03T10:08:08.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

