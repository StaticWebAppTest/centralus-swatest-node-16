module.exports = async function (context, req) {
  const date = "2023-04-11T08:12:04.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

