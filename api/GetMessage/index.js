module.exports = async function (context, req) {
  const date = "2025-02-28T09:13:08.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

