module.exports = async function (context, req) {
  const date = "2023-07-13T18:12:26.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

