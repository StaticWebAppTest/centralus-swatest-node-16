module.exports = async function (context, req) {
  const date = "2023-11-30T17:09:02.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

