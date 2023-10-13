module.exports = async function (context, req) {
  const date = "2023-10-13T21:07:40.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

