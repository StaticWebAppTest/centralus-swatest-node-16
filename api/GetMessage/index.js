module.exports = async function (context, req) {
  const date = "2023-03-10T17:08:20.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

