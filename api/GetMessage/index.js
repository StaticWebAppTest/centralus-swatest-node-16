module.exports = async function (context, req) {
  const date = "2022-09-18T08:14:33.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

