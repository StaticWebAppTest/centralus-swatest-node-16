module.exports = async function (context, req) {
  const date = "2024-05-19T14:09:01.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

