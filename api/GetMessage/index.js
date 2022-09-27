module.exports = async function (context, req) {
  const date = "2022-09-27T13:50:59.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

