module.exports = async function (context, req) {
  const date = "2023-08-30T07:08:02.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

