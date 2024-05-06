module.exports = async function (context, req) {
  const date = "2024-05-06T13:11:22.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

