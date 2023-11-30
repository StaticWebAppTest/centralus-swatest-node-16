module.exports = async function (context, req) {
  const date = "2023-11-30T05:09:04.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

