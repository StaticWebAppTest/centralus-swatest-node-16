module.exports = async function (context, req) {
  const date = "2022-12-03T03:10:22.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

