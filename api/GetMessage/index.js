module.exports = async function (context, req) {
  const date = "2024-02-05T05:09:23.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

