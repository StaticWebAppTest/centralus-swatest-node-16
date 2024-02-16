module.exports = async function (context, req) {
  const date = "2024-02-16T18:11:15.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

