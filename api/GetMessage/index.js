module.exports = async function (context, req) {
  const date = "2025-05-03T11:10:01.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

