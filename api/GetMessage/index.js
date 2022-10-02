module.exports = async function (context, req) {
  const date = "2022-10-02T01:19:05.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

