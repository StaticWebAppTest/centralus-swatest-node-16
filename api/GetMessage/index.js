module.exports = async function (context, req) {
  const date = "2024-03-21T14:09:05.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

