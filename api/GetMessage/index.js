module.exports = async function (context, req) {
  const date = "2024-04-11T07:09:59.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

