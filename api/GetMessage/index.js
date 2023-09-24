module.exports = async function (context, req) {
  const date = "2023-09-24T21:06:54.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

