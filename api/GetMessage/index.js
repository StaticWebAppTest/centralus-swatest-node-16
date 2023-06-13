module.exports = async function (context, req) {
  const date = "2023-06-13T13:11:51.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

