module.exports = async function (context, req) {
  const date = "2023-10-10T00:40:39.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

