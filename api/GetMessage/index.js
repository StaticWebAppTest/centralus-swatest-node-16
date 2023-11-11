module.exports = async function (context, req) {
  const date = "2023-11-11T13:08:53.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

