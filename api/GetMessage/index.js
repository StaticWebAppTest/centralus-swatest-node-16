module.exports = async function (context, req) {
  const date = "2023-09-13T12:16:43.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

