module.exports = async function (context, req) {
  const date = "2022-05-16T12:24:19.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

