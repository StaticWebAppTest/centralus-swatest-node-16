module.exports = async function (context, req) {
  const date = "2023-07-11T21:08:47.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

