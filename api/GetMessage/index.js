module.exports = async function (context, req) {
  const date = "2022-10-31T10:13:45.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

