module.exports = async function (context, req) {
  const date = "2024-05-28T20:10:44.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

