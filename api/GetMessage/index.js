module.exports = async function (context, req) {
  const date = "2023-06-19T21:08:09.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

