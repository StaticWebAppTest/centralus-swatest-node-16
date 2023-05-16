module.exports = async function (context, req) {
  const date = "2023-05-16T09:08:43.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

