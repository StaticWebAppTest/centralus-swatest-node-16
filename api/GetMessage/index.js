module.exports = async function (context, req) {
  const date = "2022-08-02T14:10:32.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

