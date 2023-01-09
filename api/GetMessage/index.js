module.exports = async function (context, req) {
  const date = "2023-01-09T09:10:32.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

