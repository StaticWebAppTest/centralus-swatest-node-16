module.exports = async function (context, req) {
  const date = "2023-01-30T12:18:02.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

