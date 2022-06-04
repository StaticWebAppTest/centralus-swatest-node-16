module.exports = async function (context, req) {
  const date = "2022-06-04T10:10:27.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

