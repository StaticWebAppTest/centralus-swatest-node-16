module.exports = async function (context, req) {
  const date = "2023-12-16T20:09:05.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

