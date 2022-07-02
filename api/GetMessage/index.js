module.exports = async function (context, req) {
  const date = "2022-07-02T10:11:13.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

