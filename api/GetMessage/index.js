module.exports = async function (context, req) {
  const date = "2024-10-02T23:11:31.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

