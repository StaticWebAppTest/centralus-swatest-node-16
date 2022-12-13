module.exports = async function (context, req) {
  const date = "2022-12-13T12:18:49.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

