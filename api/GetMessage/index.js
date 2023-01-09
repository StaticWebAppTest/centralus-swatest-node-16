module.exports = async function (context, req) {
  const date = "2023-01-09T06:12:35.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

