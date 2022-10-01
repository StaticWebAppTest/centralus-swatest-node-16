module.exports = async function (context, req) {
  const date = "2022-10-01T19:12:02.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

