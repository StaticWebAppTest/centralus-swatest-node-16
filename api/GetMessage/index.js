module.exports = async function (context, req) {
  const date = "2022-11-21T10:12:09.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

