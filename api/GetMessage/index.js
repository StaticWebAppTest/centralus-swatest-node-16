module.exports = async function (context, req) {
  const date = "2022-08-01T10:13:05.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

