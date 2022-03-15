module.exports = async function (context, req) {
  const date = "2022-03-15T14:09:59.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

