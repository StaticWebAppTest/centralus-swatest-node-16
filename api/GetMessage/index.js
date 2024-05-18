module.exports = async function (context, req) {
  const date = "2024-05-18T10:09:01.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

