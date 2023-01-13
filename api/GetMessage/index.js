module.exports = async function (context, req) {
  const date = "2023-01-13T20:10:07.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

