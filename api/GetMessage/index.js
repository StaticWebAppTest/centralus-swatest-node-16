module.exports = async function (context, req) {
  const date = "2023-05-16T17:07:59.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

