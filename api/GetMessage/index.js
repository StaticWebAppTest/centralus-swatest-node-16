module.exports = async function (context, req) {
  const date = "2022-09-16T23:12:38.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

