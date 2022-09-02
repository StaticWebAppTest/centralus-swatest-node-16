module.exports = async function (context, req) {
  const date = "2022-09-02T07:18:40.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

