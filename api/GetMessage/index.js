module.exports = async function (context, req) {
  const date = "2023-05-09T09:09:01.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

