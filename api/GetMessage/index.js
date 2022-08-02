module.exports = async function (context, req) {
  const date = "2022-08-02T08:14:20.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

