module.exports = async function (context, req) {
  const date = "2022-09-15T10:13:32.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

