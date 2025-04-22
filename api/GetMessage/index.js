module.exports = async function (context, req) {
  const date = "2025-04-22T11:11:19.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

