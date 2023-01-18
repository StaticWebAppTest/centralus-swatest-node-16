module.exports = async function (context, req) {
  const date = "2023-01-18T20:09:50.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

