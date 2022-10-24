module.exports = async function (context, req) {
  const date = "2022-10-24T10:19:48.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

