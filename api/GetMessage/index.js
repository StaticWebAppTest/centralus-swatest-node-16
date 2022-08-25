module.exports = async function (context, req) {
  const date = "2022-08-25T07:16:27.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

