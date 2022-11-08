module.exports = async function (context, req) {
  const date = "2022-11-08T10:12:49.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

