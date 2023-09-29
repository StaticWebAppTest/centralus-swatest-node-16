module.exports = async function (context, req) {
  const date = "2023-09-29T20:09:08.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

