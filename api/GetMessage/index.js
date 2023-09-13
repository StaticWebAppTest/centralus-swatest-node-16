module.exports = async function (context, req) {
  const date = "2023-09-13T20:07:47.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

