module.exports = async function (context, req) {
  const date = "2023-02-28T20:11:02.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

