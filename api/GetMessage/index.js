module.exports = async function (context, req) {
  const date = "2024-08-21T09:12:08.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

