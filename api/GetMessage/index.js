module.exports = async function (context, req) {
  const date = "2022-12-19T12:18:00.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

