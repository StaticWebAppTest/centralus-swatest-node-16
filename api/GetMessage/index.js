module.exports = async function (context, req) {
  const date = "2023-10-13T14:08:39.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

