module.exports = async function (context, req) {
  const date = "2023-11-22T20:09:44.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

