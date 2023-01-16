module.exports = async function (context, req) {
  const date = "2023-01-16T18:11:40.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

