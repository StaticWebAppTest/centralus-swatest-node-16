module.exports = async function (context, req) {
  const date = "2023-02-16T15:10:14.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

