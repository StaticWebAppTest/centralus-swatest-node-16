module.exports = async function (context, req) {
  const date = "2024-09-10T14:11:09.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

