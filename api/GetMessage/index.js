module.exports = async function (context, req) {
  const date = "2024-09-07T20:11:07.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

