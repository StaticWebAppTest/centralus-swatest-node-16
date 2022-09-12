module.exports = async function (context, req) {
  const date = "2022-09-12T08:17:07.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

