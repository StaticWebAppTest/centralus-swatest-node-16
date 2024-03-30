module.exports = async function (context, req) {
  const date = "2024-03-30T14:07:21.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

