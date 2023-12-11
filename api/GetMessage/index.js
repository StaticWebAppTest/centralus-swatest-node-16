module.exports = async function (context, req) {
  const date = "2023-12-11T17:08:50.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

