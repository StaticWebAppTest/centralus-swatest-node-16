module.exports = async function (context, req) {
  const date = "2023-06-09T10:09:17.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

