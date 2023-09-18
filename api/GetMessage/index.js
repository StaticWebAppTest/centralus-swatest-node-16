module.exports = async function (context, req) {
  const date = "2023-09-18T20:09:08.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

