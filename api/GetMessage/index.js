module.exports = async function (context, req) {
  const date = "2022-03-02T17:12:53.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

