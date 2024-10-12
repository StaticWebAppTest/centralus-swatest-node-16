module.exports = async function (context, req) {
  const date = "2024-10-12T14:09:28.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

