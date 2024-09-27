module.exports = async function (context, req) {
  const date = "2024-09-27T15:11:45.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

