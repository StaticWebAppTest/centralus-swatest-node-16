module.exports = async function (context, req) {
  const date = "2022-11-19T15:10:22.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

