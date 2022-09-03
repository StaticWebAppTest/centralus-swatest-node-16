module.exports = async function (context, req) {
  const date = "2022-09-03T09:10:42.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

