module.exports = async function (context, req) {
  const date = "2022-12-13T14:09:40.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

