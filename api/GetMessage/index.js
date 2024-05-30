module.exports = async function (context, req) {
  const date = "2024-05-30T15:10:37.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

