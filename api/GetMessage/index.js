module.exports = async function (context, req) {
  const date = "2023-10-31T20:09:10.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

