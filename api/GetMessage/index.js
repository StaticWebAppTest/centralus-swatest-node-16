module.exports = async function (context, req) {
  const date = "2024-04-13T14:08:03.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

