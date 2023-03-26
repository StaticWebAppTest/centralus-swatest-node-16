module.exports = async function (context, req) {
  const date = "2023-03-26T14:07:36.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

