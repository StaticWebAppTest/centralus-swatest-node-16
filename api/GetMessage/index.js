module.exports = async function (context, req) {
  const date = "2024-06-14T17:10:08.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

