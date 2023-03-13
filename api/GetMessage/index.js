module.exports = async function (context, req) {
  const date = "2023-03-13T17:08:57.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

