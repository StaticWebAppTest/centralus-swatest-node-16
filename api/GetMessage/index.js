module.exports = async function (context, req) {
  const date = "2023-09-30T10:08:01.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

