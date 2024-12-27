module.exports = async function (context, req) {
  const date = "2024-12-27T08:15:07.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

