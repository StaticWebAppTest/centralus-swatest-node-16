module.exports = async function (context, req) {
  const date = "2023-02-16T18:11:11.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

