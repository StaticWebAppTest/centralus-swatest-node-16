module.exports = async function (context, req) {
  const date = "2024-11-24T09:11:09.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

