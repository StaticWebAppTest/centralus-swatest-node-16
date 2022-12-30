module.exports = async function (context, req) {
  const date = "2022-12-30T08:11:49.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

