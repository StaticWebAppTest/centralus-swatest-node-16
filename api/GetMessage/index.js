module.exports = async function (context, req) {
  const date = "2024-03-10T18:09:54.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

