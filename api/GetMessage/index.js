module.exports = async function (context, req) {
  const date = "2023-08-11T09:08:24.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

