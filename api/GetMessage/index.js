module.exports = async function (context, req) {
  const date = "2023-10-14T18:10:27.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

