module.exports = async function (context, req) {
  const date = "2023-04-21T07:08:27.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

