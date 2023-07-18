module.exports = async function (context, req) {
  const date = "2023-07-18T11:08:02.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

