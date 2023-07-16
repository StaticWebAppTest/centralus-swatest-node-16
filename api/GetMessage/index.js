module.exports = async function (context, req) {
  const date = "2023-07-16T23:09:08.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

