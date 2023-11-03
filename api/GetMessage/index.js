module.exports = async function (context, req) {
  const date = "2023-11-03T08:11:25.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

