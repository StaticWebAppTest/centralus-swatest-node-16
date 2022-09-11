module.exports = async function (context, req) {
  const date = "2022-09-11T10:12:30.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

