module.exports = async function (context, req) {
  const date = "2022-06-09T17:15:26.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

