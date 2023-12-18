module.exports = async function (context, req) {
  const date = "2023-12-18T20:09:57.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

