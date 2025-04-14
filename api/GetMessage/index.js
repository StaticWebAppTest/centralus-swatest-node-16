module.exports = async function (context, req) {
  const date = "2025-04-14T11:11:08.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

