module.exports = async function (context, req) {
  const date = "2023-03-13T12:19:24.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

