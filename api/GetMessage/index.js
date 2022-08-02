module.exports = async function (context, req) {
  const date = "2022-08-02T09:10:12.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

