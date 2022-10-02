module.exports = async function (context, req) {
  const date = "2022-10-02T09:14:55.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

