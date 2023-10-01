module.exports = async function (context, req) {
  const date = "2023-10-01T06:11:09.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

