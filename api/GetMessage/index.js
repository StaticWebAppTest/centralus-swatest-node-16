module.exports = async function (context, req) {
  const date = "2022-03-15T10:11:50.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

