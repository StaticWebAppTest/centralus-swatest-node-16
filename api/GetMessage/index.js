module.exports = async function (context, req) {
  const date = "2024-10-12T04:13:49.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

