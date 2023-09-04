module.exports = async function (context, req) {
  const date = "2023-09-04T14:08:02.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

