module.exports = async function (context, req) {
  const date = "2023-03-03T17:09:21.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

