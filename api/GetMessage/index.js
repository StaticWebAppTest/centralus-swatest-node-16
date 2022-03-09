module.exports = async function (context, req) {
  const date = "2022-03-09T17:11:59.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

