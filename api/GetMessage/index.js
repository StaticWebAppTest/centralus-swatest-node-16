module.exports = async function (context, req) {
  const date = "2024-07-28T20:10:25.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

