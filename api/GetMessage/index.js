module.exports = async function (context, req) {
  const date = "2023-03-09T07:09:49.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

