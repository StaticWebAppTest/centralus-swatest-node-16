module.exports = async function (context, req) {
  const date = "2022-08-16T01:08:30.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

