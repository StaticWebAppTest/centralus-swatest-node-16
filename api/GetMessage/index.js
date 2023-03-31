module.exports = async function (context, req) {
  const date = "2023-03-31T20:09:01.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

