module.exports = async function (context, req) {
  const date = "2022-11-04T10:12:54.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

