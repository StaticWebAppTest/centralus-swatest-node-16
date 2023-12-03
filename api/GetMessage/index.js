module.exports = async function (context, req) {
  const date = "2023-12-03T08:11:10.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

