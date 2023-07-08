module.exports = async function (context, req) {
  const date = "2023-07-08T15:09:02.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

