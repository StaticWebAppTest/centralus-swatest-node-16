module.exports = async function (context, req) {
  const date = "2024-03-13T03:11:07.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

