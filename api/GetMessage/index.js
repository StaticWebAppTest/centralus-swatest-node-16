module.exports = async function (context, req) {
  const date = "2023-03-16T13:18:57.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

