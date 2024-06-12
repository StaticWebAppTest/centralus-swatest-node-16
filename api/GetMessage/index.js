module.exports = async function (context, req) {
  const date = "2024-06-12T05:10:13.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

