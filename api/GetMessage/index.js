module.exports = async function (context, req) {
  const date = "2023-12-03T20:09:05.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

