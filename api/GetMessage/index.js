module.exports = async function (context, req) {
  const date = "2024-04-12T11:10:19.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

