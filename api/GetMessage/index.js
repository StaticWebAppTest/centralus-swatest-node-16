module.exports = async function (context, req) {
  const date = "2025-08-28T14:13:10.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

