module.exports = async function (context, req) {
  const date = "2022-05-25T10:13:50.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

