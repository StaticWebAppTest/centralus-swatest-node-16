module.exports = async function (context, req) {
  const date = "2022-11-13T13:24:06.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

