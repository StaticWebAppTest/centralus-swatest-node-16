module.exports = async function (context, req) {
  const date = "2024-09-10T10:11:54.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

