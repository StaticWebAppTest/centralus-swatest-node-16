module.exports = async function (context, req) {
  const date = "2022-07-11T12:22:16.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

