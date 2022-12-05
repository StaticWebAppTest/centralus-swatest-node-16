module.exports = async function (context, req) {
  const date = "2022-12-05T08:13:20.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

