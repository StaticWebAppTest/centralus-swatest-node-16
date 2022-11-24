module.exports = async function (context, req) {
  const date = "2022-11-24T10:11:15.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

