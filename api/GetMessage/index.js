module.exports = async function (context, req) {
  const date = "2023-03-19T14:07:58.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

