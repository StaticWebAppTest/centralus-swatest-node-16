module.exports = async function (context, req) {
  const date = "2022-08-11T08:13:22.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

